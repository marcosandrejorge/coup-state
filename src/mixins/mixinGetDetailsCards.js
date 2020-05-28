import imgDuque from '@/assets/duque.jpg'
import imgCapitao from '@/assets/capitao.jpg'
import imgCondesa from '@/assets/condesa.jpg'
import imgAssassino from '@/assets/assassino.jpg'
import imgInquisidor from '@/assets/inquisidor.jpg'

export default {
    methods: {

        mixinGetImageCard(idCarta){

            let img = "";

            switch (idCarta) {
                case 1:
                    img = imgDuque
                    break
                case 2:
                    img = imgCapitao
                    break
                case 3:
                    img = imgCondesa
                    break
                case 4:
                    img = imgAssassino
                    break
                case 5:
                    img = imgInquisidor
                    break
            }

            return img
        },

        mixinGetNameCard(idCarta) {

            let name = "";

            switch (idCarta) {
                case 1:
                    name = 'Rei'
                    break
                case 2:
                    name = 'Major'
                    break
                case 3:
                    name = 'Dama'
                    break
                case 4:
                    name = 'Matador'
                    break
                case 5:
                    name = 'Juiz'
                    break
            }

            return name;
        },

        mixinGetActionsCard(idCarta) {

            let arrAction = [];

            switch (idCarta) {
                case 1:
                    arrAction = [
                        'Compra 3 moedas',
                        'Bloqueia ajuda externa',
                    ]
                    break
                case 2:
                    arrAction = [
                        'Pegue 2 moedas',
                        'Bloqueia outro major'
                    ]
                    break
                case 3:
                    arrAction = [
                        'Defende do matador'
                    ]
                    break
                case 4:
                    arrAction = [
                        'Assassina com 3 moedas'
                    ]
                    break
                case 5:
                    arrAction = [
                        'Troca uma carta da mão',
                        'Vê uma carta do oponente'
                    ]
                    break
            }

            return arrAction
        }
    }
}