// Label each landmass once, then check each water cell's neighbors.
// Time: O(n^2)  Space: O(n^2)
public class ReclaimPlotOptimized {
    static int[] dr = {-1, 1, 0, 0};
    static int[] dc = {0, 0, -1, 1};
    public static int optimized(int[][] city) {
        int n = city.length;
        int[][] id = new int[n][n];          
        int[] sizes = new int[n * n + 2];    
        int[] stack = new int[n * n];
        int count = 0;                      
        int best = 0;

        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (city[r][c] == 1 && id[r][c] == 0) {
                    count++;
                    int top = 0;
                    int size = 0;
                    stack[top++] = r * n + c;
                    id[r][c] = count;

                    while (top > 0) {
                        int cell = stack[--top];
                        int cr = cell / n;
                        int cc = cell % n;
                        size++;
                        for (int d = 0; d < 4; d++) {
                            int nr = cr + dr[d];
                            int nc = cc + dc[d];
                            if (nr >= 0 && nr < n && nc >= 0 && nc < n
                                    && city[nr][nc] == 1 && id[nr][nc] == 0) {
                                id[nr][nc] = count;
                                stack[top++] = nr * n + nc;
                            }
                        }
                    }
                    sizes[count] = size;
                    if (size > best) {
                        best = size;
                    }
                }
            }
        }
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (city[r][c] == 0) {
                    int total = 1;
                    int[] seenIds = new int[4];
                    int seenCount = 0;

                    for (int d = 0; d < 4; d++) {
                        int nr = r + dr[d];
                        int nc = c + dc[d];
                        if (nr >= 0 && nr < n && nc >= 0 && nc < n && id[nr][nc] != 0) {
                            int landId = id[nr][nc];

                            // skip it if we already counted this landmass
                            boolean already = false;
                            for (int k = 0; k < seenCount; k++) {
                                if (seenIds[k] == landId) {
                                    already = true;
                                }
                            }

                            if (!already) {
                                seenIds[seenCount++] = landId;
                                total += sizes[landId];
                            }
                        }
                    }

                    if (total > best) {
                        best = total;
                    }
                }
            }
        }

        return best;
    }
    public static void main(String[] args) {
        int[][] city = {
            {1, 1, 0, 0},
            {1, 0, 0, 1},
            {0, 1, 1, 1},
            {0, 0, 0, 1}
        };
        System.out.println(optimized(city)); // expected 9
    }
}
