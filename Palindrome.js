export function palindrome (string) {
    if (string.toLowerCase() === string.split('').reverse('').join('').toLowerCase()) {
        return true
    }else{
        return false
    }
}

/***
 * Node js repl
 * node js repl stands for read, evaluate,print and loop. It is a prompt in the command line that can be used to write 
 * javascript code, evaluate the result of the code, print the result and then give a new box to write more code. 
 * The node js repl can be called on the command line by typing the "node" instruction, to quit the prompt totally, the ".exit" command is used.
 * In the node js repl, varibales can also be declared and values stored in them but after quitting the session, the variables are deleted fr4om the memory.
 * The node repl is useful when you want to test out code in which you want to see the result quickly.
 */
