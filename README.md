# sp-week7-PromisesMVCRest
https://github.com/LiamHomay/sp-week7-PromisesMVCRest.git

## Promises:
1. The output is 1, 4, 3, 2 because JavaScript executes synchronous code first (1 and 4), followed by all tasks in the Microtask Queue (the Promise 3), and finally tasks in the Macrotask Queue (the setTimeout 2), as microtasks always take priority over macrotasks once the main thread is clear.

2. The output is 2, 4, 1, 3 because JavaScript executes synchronous code first (no prints), followed by all tasks in the Microtask Queue (the Promise 2 and 4), and finally tasks in the Macrotask Queue (the setTimeout 1 and 3), as microtasks always take priority over macrotasks once the main thread is clear.

3. The output is 4, 1, 5, 2, 3 because JavaScript executes synchronous code first (4, then 1 inside the called demo function), but upon hitting an await, the remainder of the async function is paused and pushed to the Microtask Queue, allowing the engine to return to the main thread and execute the remaining synchronous code (5); subsequently, the event loop processes the queued microtasks in order, resuming the function to log 2 and then 3 after the second await.

4. The output is 6, 4, 1, 2, 3, 5, 7 because the code execution starts synchronously through the nested function calls. specifically, console.log(2) executes immediately because the Promise constructor runs its executor function synchronously upon instantiation. Once the first await is reached, the remaining code in level3, level2, and level1 is pushed to the Microtask Queue as a sequence of continuations, which are then processed in order once the initial synchronous stack finishes, causing the logs to print in the reverse order of their nested function completion.

5. The output is 6, 4, 1, 2, 7, 3, 5 because, unlike the previous version, level2() inside level1() is called without an await, causing it to execute and hit its own await level3() pause before returning control immediately back to level1(), which then proceeds to synchronously log 7. The synchronous execution chain finishes with 6, 4, 1, 2, and because the level1 execution finishes without waiting for the level2 chain, the remaining microtasks (3 from level3 and 5 from level2) are then processed sequentially in the order they were queued.