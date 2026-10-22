// ReclaimPlotBrute.java
// Try turning each water cell into land and measure the biggest landmass.
// Time: O(n^4)  Space: O(n^2)

public class ReclaimPlotBrute {

    static int[] dr = {-1, 1, 0, 0};
    static int[] dc = {0, 0, -1, 1};

    public static int brute(int[][] city) {
        int n = city.length;

        // best with no change at all (also covers the "no water" case)
        int best = largest(city);

        // try turning each water cell into land
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (city[r][c] == 0) {
                    city[r][c] = 1;
                    int size = largest(city);
                    city[r][c] = 0; // put it back
                    if (size > best) {
                        best = size;
                    }
                }
            }
        }

        return best;
    }

    // size of the biggest landmass in the grid
    private static int largest(int[][] g) {
        int n = g.length;
        boolean[][] seen = new boolean[n][n];
        int best = 0;

        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (g[r][c] == 1 && !seen[r][c]) {
                    int size = fill(g, seen, r, c);
                    if (size > best) {
                        best = size;
                    }
                }
            }
        }

        return best;
    }

    // flood fill from (sr, sc) with our own stack, returns how many cells it reached
    private static int fill(int[][] g, boolean[][] seen, int sr, int sc) {
        int n = g.length;
        int[] stack = new int[n * n];
        int top = 0;
        int count = 0;

        stack[top++] = sr * n + sc;
        seen[sr][sc] = true;

        while (top > 0) {
            int cell = stack[--top];
            int r = cell / n;
            int c = cell % n;
            count++;

            for (int d = 0; d < 4; d++) {
                int nr = r + dr[d];
                int nc = c + dc[d];
                if (nr >= 0 && nr < n && nc >= 0 && nc < n
                        && g[nr][nc] == 1 && !seen[nr][nc]) {
                    seen[nr][nc] = true;
                    stack[top++] = nr * n + nc;
                }
            }
        }
        return count;
    }
    public static void main(String[] args) {
        int[][] city = {
            {1, 1, 0, 0},
            {1, 0, 0, 1},
            {0, 1, 1, 1},
            {0, 0, 0, 1}
        };
        System.out.println(brute(city));
    }
}
