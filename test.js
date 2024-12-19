const fruits= [
    {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10
    },
    {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20
    },
    {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50
    },
    {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100
    },
    {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
    },
    {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20
    },
    {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150
    }
    ]
    
    //No 1 
    console.log("1. ");
    for (var i = 0; i < fruits.length; i++) 
    {
        console.log(fruits[i].fruitName);
    }
    
    //No 2
    console.log("\n2. ");
    const FruitType2 = []
    for (var i = 0; i < fruits.length; i++) 
    {
        FruitType2.push(fruits[i].fruitType);
    }
    const UniqueFruitType2 = [...new Set(FruitType2)];
    console.log("Jumlah Wadah: " + UniqueFruitType2.length + " ( " + UniqueFruitType2 + " )");
    for (var i = 0; i < UniqueFruitType2.length; i++) 
    {
        console.log(UniqueFruitType2[i] + ": ");
        for (var j = 0; j < fruits.length; j++) 
        {
            if (fruits[j].fruitType === UniqueFruitType2[i])
            {
                console.log(fruits[j].fruitName);
            }
        }
        console.log("\n");
    }
    
    //No 3
    console.log("3. ");
    const FruitType3 = []
    for (var i = 0; i < fruits.length; i++) 
    {
        FruitType3.push(fruits[i].fruitType);
    }
    const UniqueFruitType3 = [...new Set(FruitType3)];
    for (var i = 0; i < UniqueFruitType3.length; i++) 
    {
        var temp = 0;
        for (var j = 0; j < fruits.length; j++) 
        {
            if (fruits[j].fruitType === UniqueFruitType3[i])
            {
                temp += fruits[j].stock;
            }
        }
        console.log("Untuk " + UniqueFruitType3[i] + " = " + temp);
    }
    
    //No 4
    console.log("\n4. ");
    console.log("Beberapa Fruit Mempunyai Id Yang Sama, Hal ini Mungkin Bisa Mempersulit Pengerjaan Program Di Masa Depan Nanti Jika Membutuhkan / Menggunakan Nilai Id")
    
    //No 5
    console.log("\n5. ");
    const comments= [
    {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
    {
    commentId: 11,
    commentContent: 'Hai juga',
    replies: [
    {
    commentId: 111,
    commentContent: 'Haai juga hai jugaa'
    },
    {
    commentId: 112,
    commentContent: 'Haai juga hai jugaa'
    }
    ]
    },
    {
    commentId: 12,
    commentContent: 'Hai juga',
    replies: [
    {
    commentId: 121,
    commentContent: 'Haai juga hai jugaa'
    }
    ]
    }
    ]
    },
    {
    commentId: 2,
    commentContent: 'Halooo'
    }
    ]
    
    function CountComment(comments)
    {
        var Counts = 0;
        for(comment of comments)
        {
            Counts++;
            if(comment.replies)
            {
                Counts += CountComment(comment.replies);
            }
        }
        return Counts;
    }
    console.log(CountComment(comments))