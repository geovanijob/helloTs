"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno = /** @class */ (function () {
    function Aluno(ra, nome) {
        this.ra = ra;
        this.nome = nome;
    }
    Aluno.prototype.mostra = function () {
        console.log(this.ra, this.nome);
    };
    return Aluno;
}());
exports.Aluno = Aluno;
//# sourceMappingURL=aluno.js.map