console.log('=== BUILD ENVIRONMENT DEBUG ===');
console.log('All keys starting with VITE_:');
const keys = Object.keys(process.env).filter(k => k.startsWith('VITE_'));
console.log(keys);
if (keys.length === 0) {
    console.log('WARNING: No VITE_ variables found in process.env!');
} else {
    console.log(`Found ${keys.length} VITE_ variables.`);
}
console.log('===============================');
