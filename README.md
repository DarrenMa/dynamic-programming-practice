# dynamic-programming-practice
Dynamic Programming - Learn to Solve Algorithmic Problems &amp; Coding Challenges

https://www.youtube.com/watch?v=oBt53YbR9Kk

## Contents

  - Dynamic programming strategies
    - Brute (recursive, what we want to optimize)
    - Memoization (top down)
    - Tabulation (bottom up)

  - Problems
    1. Fibonacci
    2. Gridtraveller
    3. CanSum (Can you do this problem? (Decision problem)) 
    4. HowSum (How can you do this problem? (Combinatoric problem))
    5. BestSum (What is the best way to solve this problem? (Optimization problem))
    6. CanConstruct (Using strings)
    7. CountConstruct
    8. AllConstruct (Exhaustive search for all combos)


## Memoizaiton vs Tabulation

In software engineering, the choice between memoization and tabulation (dynamic programming techniques) depends on the specific problem, the context in which the algorithm is used, and the preferences of the developer or the team. Here are some considerations that might guide the choice:

1. **Space Complexity**: Tabulation might use more space because it builds a table of all subproblem solutions, even if not all are needed for the final answer. Memoization, on the other hand, only stores the results of subproblems that are actually used, which can be more space-efficient in some cases.

2. **Top-Down (Memoization) vs. Bottom-Up (Tabulation)**:
   - **Memoization** is a top-down approach, which can be more intuitive if the problem is naturally expressed recursively. It's easier to implement for problems where the solution can be broken down into recursive subproblems.
   - **Tabulation** is a bottom-up approach and can be more efficient in terms of iterative calls and stack space. It's generally faster because it avoids the overhead of recursive calls.

3. **Subproblem Solving**:
   - If not all subproblems need to be solved to get the answer to the main problem, memoization might be preferred because it only solves the necessary subproblems.
   - If solving all subproblems is required, tabulation might be more straightforward and efficient.

4. **Readability and Maintainability**: Some developers find tabulation easier to read and maintain because it avoids recursion and can be more straightforward. Others prefer the natural recursive pattern of memoization, especially if the problem is inherently recursive.

5. **Initialization Overhead**: Tabulation requires initializing the storage for all subproblems upfront, which can be a drawback if the initialization is complex or if the number of subproblems is large but only a few are needed.

6. **System Limitations**: In environments with limited stack size, the recursive calls required by memoization might lead to stack overflow errors for large inputs. In such cases, tabulation or iterative solutions might be preferred.

Ultimately, the preferred approach is context-dependent. It's often beneficial to understand both techniques and apply the one that best fits the problem, performance requirements, and team preferences. Experimentation and profiling can also help decide by comparing the performance of both approaches for the specific use case.