Template.prototype.calculatorTemplate = () => `
   <input id="inputCalc" disabled placeholder="0">
   <br>
   <button class="operand" data-operand="complRoot"><sup>x</sup>√</button>
   <button class="operand" data-operand="power">x<sup>y</sup></button>
   <button class="operand" data-operand="sinus">sin</button>
   <button class="operand" data-operand="cosinus">cos</button>
   <br>
   <button class="operand" data-operand="root">√</button>
   <button class="operand" data-operand="square">x²</button>
   <button class="operand" data-operand="absolute">|x|</button>
   <button class="operand" data-operand="add">+</button>
   <br>
   <button class="number">1</button>
   <button class="number">2</button>
   <button class="number">3</button>
   <button class="operand" data-operand="minus">-</button>
   <br>
   <button class="number">4</button>
   <button class="number">5</button>
   <button class="number">6</button>
   <button class="operand" data-operand="mult">*</button>
   <br>
   <button class="number">7</button>
   <button class="number">8</button>
   <button class="number">9</button>
   <button class="operand" data-operand="split">/</button>
   <br>
   <button class="operand" data-operand="plusminus">±</button>
   <button class="number">0</button>
   <button class="number">.</button>
   <button class="clear operand" data-operand="clear">c</button>
   <br>
   <button class="operand equal" data-operand="equal">=</button>`;