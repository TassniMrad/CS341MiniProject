public class TwoFloodwalls {
	    /** Brute force solution. Time: O(n²)  Space: O(1) */
	    public static int brute(int[] walls) {
	        int bestArea = 0;
	        
	        for (int first = 0; first < walls.length; first++) {
	            for (int second = first + 1; second < walls.length; second++) {
	                int waterLevel = Math.min(walls[first], walls[second]);
	                int distance = second - first;
	                int area = waterLevel * distance;
	                if (area > bestArea) {
	                    bestArea = area;
	                }
	            }
	        }
	        return bestArea;
	    }
