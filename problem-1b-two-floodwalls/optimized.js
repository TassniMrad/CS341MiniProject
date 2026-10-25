/** Optimized solution. Time: O(n)  Space: O(1)
	     * 
	     * Optimized (O(n) time, O(1) space): I start with the first and last walls, 
	     * since that’s the widest pair. Then I move inward, always from the shorter
	     *  wall. Moving the taller one can’t help, because the water would still 
	     *  be stuck at the short wall’s height and the width would get smaller. I do
	     *   this in one pass and keep the best area. */
	    
	    public static int optimized(int[] walls) {
	        int left = 0;
	        int right = walls.length - 1;
	        int bestArea = 0;

	        while (left < right) {
	            int waterLevel;
	            if (walls[left] < walls[right]) {
	                waterLevel = walls[left];
	            } else {
	                waterLevel = walls[right];
	            }
	            int distance = right - left;
	            int area = waterLevel * distance;

	            if (area > bestArea) {
	                bestArea = area;
	            }
	            if (walls[left] < walls[right]) {
	                left++;
	            } else {
	                right--;}}
	        return bestArea;
	    }}
