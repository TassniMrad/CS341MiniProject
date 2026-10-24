public class WarmestStretch {

    /** Brute force solution. Time: O(n * k); Space: O(1)           */
    public static double brute(int[] temps, int k) {
        long bestSum = Long.MIN_VALUE;

        // try every starting day
        for (int start = 0; start + k <= temps.length; start++) {

            // add up k days starting at this day
            long sum = 0;
            for (int i = start; i < start + k; i++) {
                sum = sum + temps[i];
            }

            if (sum > bestSum) {
                bestSum = sum;
            }
        }

        return (double) bestSum / k;
    }
}
