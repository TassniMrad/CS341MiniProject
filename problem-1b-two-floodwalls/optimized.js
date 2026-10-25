  /** Optimized solution. Time: O(n)  Space: O(1) */
	    public static int optimized(int[] walls) {
	        int left = 0;
	        int right = walls.length - 1;
	        int bestArea = 0;

	        while (left < right) {
	            int waterLevel = Math.min(walls[left], walls[right]);
	            int distance = right - left;
	            int area = waterLevel * distance;

	            if (area > bestArea) {
	                bestArea = area;
	            }

	           
	            if (walls[left] < walls[right]) {
	                left++;
	            } else {
	                right--;
	            }
	        }

	        return bestArea;
	    }
	}
