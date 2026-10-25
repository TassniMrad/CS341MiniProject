  /** Brute force solution. Time: O(n^4)  Space: O(n²)
     * 
     * Brute force (O(n⁴) time, O(n²) space): I try turning 
     * each water cell into land, one at a time. Each time, 
     * I go through the whole grid to find the biggest landmass, 
     * then I put the water back. That’s a lot of repeated work, 
     * because I recount everything for every cell. */
public class ReclaimPlot {
    public static int brute(int[][] city) {
        int n = city.length;
        int best = biggestLandmass(city);
        
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (city[r][c] == 0) {
                    city[r][c] = 1;
                    int size = biggestLandmass(city);
                    city[r][c] = 0;

                    if (size > best) {
                        best = size;
                    }}}}
        return best;
    }
    private static int biggestLandmass(int[][] g) {
        int n = g.length;
        boolean[][] visited = new boolean[n][n];
        int best = 0;

        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (g[r][c] == 1 && !(visited[r][c])) {
                    int size = countLand(g, visited, r, c);
                    if (size > best) {
                        best = size;
                    }}}}
        return best;
    }

    private static int countLand(int[][] g, boolean[][] visited, int r, int c) {
        if (r < 0 || r >= g.length || c < 0 || c >= g.length) {
            return 0;}
        
        if (g[r][c] == 0 || visited[r][c]) {
            return 0;}

        visited[r][c] = true;

        return 1 + countLand(g, visited, r - 1, c)+ countLand(g, visited, r + 1, c)+ countLand(g, visited, r, c - 1) +
            countLand(g, visited, r, c + 1);}
