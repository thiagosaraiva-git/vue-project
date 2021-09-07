new Vue ({
    el: '#desafio',
    data: {
        nome: 'Thiago',
        idade: '27',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYoD07sCKSl8HusyKcKlkDw3yHuhOIy1e4ONOqVFEmkkECYkKH&usqp=CAU'
    },
    methods: {
        random() {
            return Math.random();
        }
    }

})