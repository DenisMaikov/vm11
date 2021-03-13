class App extends Component {
    constructor(options) {      //options { id, parent, template = () => '<div>шаблон</div>', templateParams = null, callbacks = {}, className }
        super(options);
        this.header = new Header({
            id: 'header',
            template: template.headerTemplate,
            callbacks: {
                showGraph2D: () => this.showGraph2D(),
                showCalculator: () => this.showCalculator()
            }
        });
        this.graph2D = new Graph2D({
            id: 'graph2D',
            template: template.graph2Dtemplate
        });
        this.calculator = new Calculator({
            id: 'calculator',
            template: template.calculatorTemplate,
            className: 'hide'
        });
    }

    showGraph2D() {
        this.calculator.hide();
        this.graph2D.show();
    }

    showCalculator() {
        this.calculator.show();
        this.graph2D.hide();
    }
}