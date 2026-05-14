class aluno extends pessoa{
    #rm = "";
    constructor(nome, idade, rm){
        super(nome, idade);
        this.rm = rm;

    }

}
export default aluno;