public class TwoFloodwalls {
    /** Brute force solution. Time: O(n^2)  Space: O(1) */
    public static int brute(int[] walls) {
        int best = 0;

        // try every pair of walls and keep the biggest area
        for (int i = 0; i < walls.length; i++) {
            for (int j = i + 1; j < walls.length; j++) {
                int height = Math.min(walls[i], walls[j]);
                int width = j - i;
                int area = height * width;

                if (area > best) {
                    best = area;
                }
            }
        }
        return best;
    }
    public static void main(String[] args) {
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
            int got = brute(tests[t]);
            if (got == expected[t]) {
                passed++;
            } else {
                System.out.println("FAIL test " + (t + 1) + ": got " + got + ", expected " + expected[t]);
            }
        }
        System.out.println(passed + "/" + tests.length + " passed");
    }
}
