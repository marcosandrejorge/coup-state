import imgDuque from '@/assets/duque.jpg'
import imgCapitao from '@/assets/capitao.jpg'
import imgCondesa from '@/assets/condesa.jpg'
import imgAssassino from '@/assets/assassino.jpg'
import imgInquisidor from '@/assets/inquisidor.jpg'

export default [
    {
        img: imgDuque,
        nome: "Rei",
        acoes: [
            'Compra 3 moedas',
            'Bloqueia ajuda externa',
        ]
    },
    {
        img: imgCapitao,
        nome: "Major",
        acoes: [
            'Rouba 2 moedas',
            'Bloqueia outro major'
        ]
    },
    {
        img: imgCondesa,
        nome: "Dama",
        acoes: [
            'Defende do matador'
        ]
    },
    {
        img: imgAssassino,
        nome: "Matador",
        acoes: [
            'Assassina com 3 moedas'
        ]
    },
    {
        img: imgInquisidor,
        nome: "Juiz",
        acoes: [
            'Troca uma carta da mão',
            'Vê uma carta do oponente'
        ]
    }
]