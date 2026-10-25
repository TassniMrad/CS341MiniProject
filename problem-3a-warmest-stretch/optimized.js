/** Optimized solution. Time: O(n)  Space: O(1) */
    public static double optimized(int[] temps, int k) {
  
        double sum = 0;
        for (int i = 0; i < k; i++) {
            sum = sum + temps[i];
        }
        double bestSum = sum;
        for (int i = k; i < temps.length; i++) {
            sum = sum + temps[i] - temps[i - k];

            if (sum > bestSum) {
                bestSum = sum;
            }}
        return bestSum / k;
    }}
