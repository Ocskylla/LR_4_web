const run = (text) => {
    // BEGIN
    const takeLast = (text, n) => {
        if (text.length < n || text.length === 0) return null;
        return [...text.slice(-n)].reverse().join('');
    }
    // END
  
    return takeLast(text, 4);
  };
  
export default run;