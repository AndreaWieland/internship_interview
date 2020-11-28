
from dish import Dish

def canCook(supplies,dishes):
    cookableDishes = []
    #matches = 0
    for dish in dishes:
        if(all(x in supplies for x in dish.getIngredients())):
        #for i in dish.getIngredients():
        #     if i not in supplies:
        #         break
        #     else: 
        #         matches +=1
        # if matches == len(dish.getIngredients()):
        #     matches = 0
            cookableDishes.append(dish)
    return cookableDishes
        

#some sample dishes to get started
dishes = [Dish('baklava',['pistachios', 'crust', 'lots of butter']), Dish('salmon', ['salmon']), Dish('omelette', ['eggs'])]
supplies = []
prompt = True

while(prompt):
    response = input('Enter 1 to add a dish, 2 to see all dishes, 3 to check supplies, 4 to delete a dish,  and 5 to quit \n')
    if response == '1':
        name = input('Enter your dish name:\n')
        ingredients = []
        more = True
        while(more):
            res = input('Enter a dish ingredient, or 0 to exit:\n')
            if res != '0':
                ingredients.append(res)
            else:
                more= False
        dishes.append(Dish(name, ingredients))
    elif response == '2':
        for yum in dishes:
            print(yum.getName(), yum.getIngredients())
    elif response == '3':
        more = True
        while(more):
            res = input('Enter an ingredient you have, or 0 when finished:\n')
            if res != '0':
                supplies.append(res)
            else:
                more= False        
        matches = canCook(supplies, dishes)
        print('You can cook the following: \n')
        for match in matches:
            print(match.getName())
            print('Ingredients: \n', match.getIngredients())
        supplies = []
    elif response == '4':
        print('These are all your dishes.')
        dishList = enumerate(dishes)
        for x in dishList:
            print(x[0]+1, ": ", x[1].getName())
        res = int(input('Which one would you like to delete?\n'))
        del dishes[res-1]
    elif response == '5':
                prompt = False

    else:
        print('Select a valid entry.\n')
        



                 

