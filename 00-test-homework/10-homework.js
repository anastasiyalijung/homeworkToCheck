const generateBlocks = () => {
    const container = document.createElement('div');
    container.className = 'container';
    document.body.append(container);
    
      for (let i = 1; i <= 25; i++) {
        let block = document.createElement('div');
        block.className = 'blockStyle';
        block.style.background = color();
        container.append(block);
      }
  }
  
  const randomColor = () => {
    return Math.ceil(Math.random() * 256);
  }
  
  const color = () => {
    return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
  }
  generateBlocks();
  
  
  //Advanced
  
  const generateBlocksInterval = () => {
    const container = document.createElement('div');
   container.className = 'container';
    document.body.append(container);
    
      for (let i = 1; i <= 25; i++) {
        let block = document.createElement('div');
        block.className = 'blockStyle';
        setInterval(() => {
          block.style.background = color();
        }, 1000);
        container.append(block);
      }
  }
  generateBlocksInterval();