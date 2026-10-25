    /** Optimized solution. Time: O(n²)  Space: O(n²)  
     * 
     * (O(n²) time, O(n²) space): I go through the grid once 
     * and give each landmass a number and remember its size. 
     * Then for each water cell, I look at its four neighbors and add up
     *  the sizes of the different landmasses around it, plus one for the new cell.
     *   If one landmass touches the cell on two sides, I only count it once. */
    public static int optimized(int[][] city) {
        int n = city.length;
        int[][] id = new int[n][n];        
        int[] sizes = new int[n * n + 2];  
        int count = 0;
        int best = 0;

        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (city[r][c] == 1 && id[r][c] == 0) {
                    count++;
                    sizes[count] = labelLand(city, id, r, c, count);

                    if (sizes[count] > best) {
                        best = sizes[count];
                    }}}}

        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                if (city[r][c] == 0) {
                    int up = 0;
                    int down = 0;
                    int left = 0;
                    int right = 0;

                    if (r > 0) {
                        up = id[r - 1][c];
                    }
                    if (r < n - 1) {
                        down = id[r + 1][c];
                    }
                    if (c > 0) {
                        left = id[r][c - 1];
                    }
                    if (c < n - 1) {
                        right = id[r][c + 1];
                    }

                    int total = 1 + sizes[up];
                    if (down != up) {
                        total = total + sizes[down];
                    }
                    if (left != up && left != down) {
                        total = total + sizes[left];
                    }
                    if (right != up && right != down && right != left) {
                        total = total + sizes[right];
                    }

                    if (total > best) {
                        best = total;
                    }}}}
        return best;
    }

    private static int labelLand(int[][] g, int[][] id, int r, int c, int num) {
        if (r < 0 || r >= g.length || c < 0 || c >= g.length) {
            return 0;
        }
        if (g[r][c] == 0 || id[r][c] != 0) {
            return 0;
        }
        id[r][c] = num;

        return 1 + labelLand(g, id, r - 1, c, num)+ labelLand(g, id, r + 1, c, num)  + labelLand(g, id, r, c - 1, num) + 
         labelLand(g, id, r, c + 1, num);}}
