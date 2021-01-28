import hexagon_gradient_1 from '../components/image/hackathon_card/hexagon-gradient-1.png';
import hexagon_gradient_1_1 from '../components/image/hackathon_card/hexagon-gradient-1.1.png';
import hexagon_gradient_1_2 from '../components/image/hackathon_card/hexagon-gradient-1.2.png';
import challenge_logo_1 from '../components/image/hackathon_card/challenge-logo-1.png';
import challenge_logo_2 from '../components/image/hackathon_card/challenge-logo-2.png';
import challenge_logo_3 from '../components/image/hackathon_card/challenge-logo-3.png';
import illustration_1 from '../components/image/hackathon_card/illustration-1.png';
import illustration_2 from '../components/image/hackathon_card/illustration-2.png';
import illustration_3 from '../components/image/hackathon_card/illustration-3.png';


let store = {
    aside: {
        news: [
            {
                caption: "Отложение высвобождает пегматиттовый сталагмит",
                text: "Базис эрозии, основываясь большей частью на сейсмических данных,\n" +
                    "                глобален. Эоловое засоление ослабляет комплекс. Лагуна,\n" +
                    "                так же, как и в других..."
            },
            {
                caption: "Плато смещает алли, что, однако,не уничтожило доледниковую",
                text: "Пока магма остается в камере, углефикация сдвигает меловой мусковит. " +
                    "Вулканическое стекло, скажем, за 100 тысяч лет, сменяет глетчерный приток," +
                    "причем, вероятно..."
            }

        ]
    },
    hackathonCards: [
        {
            background: "linear-gradient(90deg, #FFEA00 0%, #FFD200 50%, #FFCC33 100%)",
            caption: "Хакатон трех городов",
            text: "Хакатон для молодых аналитиков и разработчиков.\n" +
                "Постройте оптимальный путь по сложной поверхности",
            background_image: hexagon_gradient_1,
            challenge_logo: challenge_logo_1,
            info_text: {
                data: "24-25 сентября",
                location: "Уфа, Самара и Казань",
                reward: "Призовой фонд - 289 000 ₽",
            },
            illustration: illustration_2,


        },
        {
            background: "linear-gradient(90deg, #FFCC33 0%, #FFD200 50%, #FFDD00 100%)",
            caption: "Хакатон по робототехнике",
            text: "Хакатон для программистов-робототехников. Разработайте " +
                "роботизироанное решение для выполнения производственной операции",
            background_image: hexagon_gradient_1_1,
            challenge_logo: challenge_logo_2,
            info_text: {
                data: "16-17 октября",
                location: "Уфа",
                reward: "Призовой фонд - 139 000 ₽",
            },
            illustration: illustration_1,
        },
        {
            background: "linear-gradient(90deg, #FFD200 0%, #FFEE00 33%, #FFD000 66%, #FFCC33 100%)",
            caption: "Rosneft Proppant Check Challenge",
            text: "Международные IT-соревнования в области ML. Определите размер зерен пропанта" +
                " по фотографии",
            background_image: hexagon_gradient_1_2,
            challenge_logo: challenge_logo_3,
            info_text: {
                data: "Сентябрь-ноябрь, финал - 28 ноября",
                location: "Москва",
                reward: "Призововй фонд - 1142 000 ₽",
            },
            illustration: illustration_3,
        }
    ]

}

export default store;
