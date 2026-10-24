public class TwoFloodwalls {

    /** Optimized solution. Time: O(n)  Space: O(1) */
    public static int optimized(int[] walls) {
        int left = 0;
        int right = walls.length - 1;
        int best = 0;

        // start with the widest pair, then move the shorter wall inward
        while (left < right) {
            int height = Math.min(walls[left], walls[right]);
            int width = right - left;
            int area = height * width;

            if (area > best) {
                best = area;
            }

            if (walls[left] < walls[right]) {
                left++;
            } else {
                right--;
            }
        }

        return best;
    }

    public static void main(String[] args) {
        //small tests 
        int[][] tests = {
            {2, 7, 3, 1, 6, 4, 2, 5},
            {1, 1},
            {2, 1},
            {0, 0},
            {0, 5},
            {0, 0, 0, 0},
            {3, 3, 3, 3, 3},
            {5, 0, 5},
            {4, 0, 0, 4},
            {1, 100, 100, 1},
            {5, 1, 1, 1, 1, 5},
            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
            {10, 9, 8, 7, 6, 5, 4, 3, 2, 1},
            {1, 3, 5, 7, 9, 7, 5, 3, 1},
            {9, 7, 5, 3, 1, 3, 5, 7, 9},
            {10000, 10000},
            {1, 2, 4, 3},
            {6, 2, 9, 3, 6},
            {8, 1, 11},
            {14, 20, 15, 18, 2, 6, 7, 4, 0},
            {5, 18, 5, 10, 6, 6, 11, 17, 15, 11, 4, 14, 8, 19}
        };

        int[] expected = {
            30, 1, 1, 0, 0, 0, 12, 10, 12, 100, 25,
            25, 25, 20, 72, 10000, 4, 24, 16, 42, 216
        };

        int passed = 0;

        for (int t = 0; t < tests.length; t++) {
            int got = optimized(tests[t]);

            if (got == expected[t]) {
                passed++;
            } else {
                System.out.println("FAIL test " + (t + 1) + ": got " + got + ", expected " + expected[t]);
            }
        }

        System.out.println(passed + "/" + tests.length + " passed");

        // large test 
        // 100000 walls of height 1, with both end walls of height 10000.
        // The best pair is the two ends: 10000 * 99999 = 999990000.
        int n = 100000;
        int[] big = new int[n];
        for (int i = 0; i < n; i++) {
            big[i] = 1;
        }
        big[0] = 10000;
        big[n - 1] = 10000;

        int bigGot = optimized(big);
        if (bigGot == 999990000) {
            System.out.println("large test: PASS");
        } else {
            System.out.println("large test: FAIL got " + bigGot + ", expected 999990000");
        }
    }
}
