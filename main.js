const pizzas = [
    {
        id:1,
        nombre: "Muzzarella",
        ingredientes:["Muzzarella,Tomates,Aceitunas"],
        precio: 590
    },
    {
        id:2,
        nombre:"Pizza Especial",
        ingredientes:["Muzzarella,Jamón,Aceitunas,Morrón Rojo"],
        precio: 900
    },
    {
        id:3,
        nombre:"Pizza Cuatro Quesos",
        ingredientes:["Muzzarella,Queso Azul, Queso Parmesano, Queso Provolone,Aceitunas"],
        precio: 1200

    },{
        id:4,
        nombre: "Pizza de Cebolla",
        ingredientes:["Muzzarella,Cebolla,Aceitunas"],
        precio: 1100
    },
    {
        id:5,
        nombre:"Pizza Calabresa",
        ingredientes:["Muzzarella,Salame,Aceitunas"],
        precio: 1300
    },
    {
        id:6,
        nombre:"Pizza Monstruo",
        ingredientes:["Muzzarella, Jamón, Cheddar, Papas Fritas, Morrón Rojo, Cebolla de verdeo, Aceitunas"],
        precio: 1800

    }
   
]


impar = pizzas.forEach((pizzas) => {
    if (pizzas.id % 2 !== 0){
        console.log('Las Pizzas con ID Impar son:',(pizzas.nombre+ '.'));
    }
});

preciomenor = pizzas.forEach( (pizzas) =>{
    if(pizzas.precio <= 600){
        console.log('Las Pizzas de menos de $600 son:',(pizzas.nombre+ '.') )
    }
}
    
);

if(pizzas.precio = Number){
    preciodepizzas = pizzas.forEach((pizzas) =>{
        if(pizzas.precio <= 5000 || pizzas.precio >= 0){
            console.log('El precio de la pizza:', pizzas.nombre, 'es de $' + pizzas.precio + '.')
        }
    }
    )
    
}else{
    console.log('El producto que busca supera los $5000 o no existe')
}

if(pizzas.ingredientes = String){
    ingredientesdepizzas = pizzas.forEach((pizzas)=>{
        if(pizzas.ingredientes = pizzas.ingredientes[0] ){
            console.log('Los ingredientes de', pizzas.nombre, 'son:', pizzas.ingredientes + '.')
        }else{
            console.log('No hay ingredientes para ese producto')
        }
    }

    );
    
};




