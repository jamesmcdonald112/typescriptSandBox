// Only strings can be returned if type annotation is set at the method signature for return statements.
function createGreeting(name?: string): string{
    if(name) {
        return `Hello ${name}`;
    } else {
        return `Hello No One`;
    }
}

