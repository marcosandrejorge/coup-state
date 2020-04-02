import imgDuque from '@/assets/duque.jpg'
import imgCapitao from '@/assets/capitao.jpg'
import imgCondesa from '@/assets/condesa.jpg'
import imgAssassino from '@/assets/assassino.jpg'
import imgInquisidor from '@/assets/inquisidor.jpg'

export default [
    {
        img: imgDuque,
        nome: "Rei",
        sn_ativa: true,
        acoes: [
            'Compra 3 moedas',
            'Bloqueia ajuda externa',
        ]
    },
    {
        img: imgCapitao,
        nome: "Major",
        sn_ativa: true,
        acoes: [
            'Rouba 2 moedas',
            'Bloqueia outro major'
        ]
    },
    {
        img: imgCondesa,
        nome: "Dama",
        sn_ativa: true,
        acoes: [
            'Defende do matador'
        ]
    },
    {
        img: imgAssassino,
        nome: "Matador",
        sn_ativa: true,
        acoes: [
            'Assassina com 3 moedas'
        ]
    },
    {
        img: imgInquisidor,
        nome: "Juiz",
        sn_ativa: true,
        acoes: [
            'Troca uma carta da mão',
            'Vê uma carta do oponente'
        ]
    }
]