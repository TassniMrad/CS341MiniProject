public class TwoFloodwalls {
	     /**Brute force solution. Time: O(n²)  Space: O(1) 
	     *Explanation: Brute force (O(n²) time, O(1) space): I just try every pair 
	     * of walls. For each pair, the water can only go as high as the shorter wall,
         *  so I multiply that height by the distance between them. I keep whichever
         *   area is biggest. */
	
	    public static int brute(int[] walls) {
	        int bestArea = 0;

	        for (int first = 0; first < walls.length; first++) {
	            for (int second = first + 1; second < walls.length; second++) {
	                int waterLevel;
	                if (walls[first] < walls[second]) {
	                    waterLevel = walls[first];
	                    
	                } else {
	                    waterLevel = walls[second];
	                }
	                int distance = second - first;
	                int area = waterLevel * distance;
	                if (area > bestArea) {
	                    bestArea = area;
	                }}}
	        return bestArea;}
