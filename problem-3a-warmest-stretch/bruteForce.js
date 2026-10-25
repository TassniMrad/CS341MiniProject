 /** Brute force solution. Time: O(n*k) which is with small n very close to O(n)  
     * Space: O(1)
     * 
     * Brute force (O(n·k) time, O(1) space): For every starting day,
     * I add up the next k temperatures and keep the biggest total. 
     *  At the end I divide by k to get the average. */
public class WarmestStretch {
    public static double brute(int[] temps, int k) {
    	
        double bestSum = 0;
        for (int i = 0; i < k; i++) {
            bestSum = bestSum + temps[i];
        }
        for (int start = 1; start + k <= temps.length; start++) {
            double sum = 0;
            for (int i = start; i < start + k; i++) {
                sum = sum + temps[i];
            }
            if (sum > bestSum) {
                bestSum = sum;
            }}
        return bestSum / k;
    }
    
    
