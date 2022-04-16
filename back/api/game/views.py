from . import game_router


@game_router.post('/init')
async def initiate_game():
    ...

