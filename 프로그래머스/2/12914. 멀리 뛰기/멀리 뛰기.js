function solution(n) {
    const dp = new Array(n).fill(0);
    dp[0] = 1; dp[1] = 2;
    
    for (let i = 2; i < n; i++) {
        dp[i] = (dp[i-2] + dp[i-1]) % 1234567;
    }
    
    return dp[n-1];
}