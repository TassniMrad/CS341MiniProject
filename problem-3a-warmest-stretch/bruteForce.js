public class WarmestStretch {

    /** Brute force solution. Time: O(n * k)  Space: O(1) */
    public static double brute(int[] temps, int k) {
        // start with the sum of the first block of k days
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
    
