/** Optimized solution. Time: O(n)  Space: O(1)
     * 
     * Optimized (O(n) time, O(1) space): I add up the 
     * first k days once. Then I slide the block over one day
     *  at a time: I add the new day and subtract the day that 
     *  just left. That way I never re-add the whole block, 
     *  and I only go through the list once. */
    
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
