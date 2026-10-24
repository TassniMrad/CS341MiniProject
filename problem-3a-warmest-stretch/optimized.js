public class WarmestStretch {

    /** Optimized solution. Time: O(n)  Space: O(1) */
    public static double optimized(int[] temps, int k) {
        // sum of the first k days
        long sum = 0;
        for (int i = 0; i < k; i++) {
            sum = sum + temps[i];
        }

        long bestSum = sum;

        // slide the window one day at a time:
        // add the new day and remove the day that left the window
        for (int i = k; i < temps.length; i++) {
            sum = sum + temps[i] - temps[i - k];

            if (sum > bestSum) {
                bestSum = sum;
            }
        }
        return (double) bestSum / k;
    }
}
