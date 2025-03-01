import { createAction, props } from '@ngrx/store';
import { ICard, ICountCard, IDeck, IDraggedCard, IFilter, ISave, ISort } from '../../models';
import { IBlog } from '../../models/interfaces/blog-entry.interface';
import { ProductCM } from '../service/card-market.service';

//region Digimon Card Actions
export const setDigimonCards = createAction('[Digimon Cards] Set Digimon Cards', props<{ digimonCards: ICard[] }>());
export const setFilteredDigimonCards = createAction(
  '[Digimon Cards] Set Filtered Digimon Cards',
  props<{ filteredCards: ICard[] }>()
);
//endregion

//region Website Actions
export const setPriceGuideCM = createAction(
  '[Set PriceGuide] Set CardMarket PriceGuide',
  props<{ products: ProductCM[] }>()
);

export const setDeck = createAction('[Set Deck] Set current Deck', props<{ deck: IDeck }>());

export const createNewDeck = createAction('[Create Deck] Create a new Deck', props<{ reset: boolean }>());

export const changeFilter = createAction('[Settings] Change Filter', props<{ filter: IFilter }>());
export const changeSearchFilter = createAction('[Settings] Change Search Filter', props<{ search: string }>());
export const changeColorFilter = createAction('[Settings] Change Color Filter', props<{ colorFilter: string[] }>());
export const changeCardTypeFilter = createAction(
  '[Settings] Change Card Type Filter',
  props<{ cardTypeFilter: string[] }>()
);
export const changeBlockFilter = createAction('[Settings] Change Block Filter', props<{ blockFilter: string[] }>());
export const changeRarityFilter = createAction('[Settings] Change Rarity Filter', props<{ rarityFilter: string[] }>());
export const changeVersionFilter = createAction(
  '[Settings] Change Version Filter',
  props<{ versionFilter: string[] }>()
);
export const changeSetFilter = createAction('[Settings] Change Set Filter', props<{ setFilter: string[] }>());

export const changeSort = createAction('[Settings] Change Sort', props<{ sort: ISort }>());

export const setMobileCollectionView = createAction(
  '[Settings] Change Mobile CollectionView',
  props<{ mobileCollectionView: boolean }>()
);

export const changeCollectionMinimum = createAction(
  '[Settings] Change Collection Minimum',
  props<{ minimum: number }>()
);

export const changeAACollectionMinimum = createAction(
  '[Settings] Change AA Collection Minimum',
  props<{ minimum: number }>()
);

export const changeShowVersion = createAction(
  '[Settings] Change Show Version',
  props<{ showPre: boolean; showAA: boolean; showStamp: boolean }>()
);

export const setCommunityDeckSearch = createAction(
  '[Search] Set Community Deck Search Term',
  props<{ communityDeckSearch: string }>()
);

export const setCommunityDecks = createAction(
  '[Digimon Decks] Save Community Decks',
  props<{ communityDecks: IDeck[] }>()
);
export const setBlogs = createAction('[Digimon Blog Entries] Save Blog Entries', props<{ blogs: IBlog[] }>());
export const setDraggedCard = createAction('[Drag] Set DraggedCard', props<{ dragCard: IDraggedCard }>());

export const addCardToDeck = createAction('[Deck] Add Card to Deck', props<{ addCardToDeck: string }>());

export const removeCardFromDeck = createAction('[Digimon Card] Remove one card from Deck', props<{ cardId: string }>());

export const addCardToSideDeck = createAction('[Deck] Add Card to Side Deck', props<{ cardId: string }>());

export const removeCardFromSideDeck = createAction(
  '[Digimon Card] Remove one card from Side Deck',
  props<{ cardId: string }>()
);
//endregion

//region Save Actions
export const loadSave = createAction('[Digimon Card Save] Load Digimon Card Save', props<{ save: ISave }>());
export const setSave = createAction('[Digimon Card Save] Set Digimon Card Save', props<{ save: ISave }>());
export const setCollection = createAction(
  '[Digimon Card Save] Set Digimon Card Collection',
  props<{ collection: ICountCard[] }>()
);
export const changeCardSize = createAction('[Settings] Change Card Size', props<{ cardSize: number }>());
export const changeCollectionMode = createAction(
  '[Settings] Change Collection Mode',
  props<{ collectionMode: boolean }>()
);
export const changeCardSets = createAction('[Settings] Change Card Sets', props<{ cardSet: string }>());
export const changeShowUserStats = createAction(
  '[Settings] Change Show User Stats',
  props<{ showUserStats: boolean }>()
);
export const setDeckDisplayTable = createAction(
  '[Settings] Set Deck Display Table',
  props<{ deckDisplayTable: boolean }>()
);
export const setShowReprintCards = createAction(
  '[Settings] Set ShowReprintCards',
  props<{ showReprintCards: boolean }>()
);
//endregions

//region Collection Actions
export const addToCollection = createAction(
  '[Digimon Cards Collection] Add Digimon Cards to Collection',
  props<{ collectionCards: ICountCard[] }>()
);

export const changeCardCount = createAction(
  '[Digimon Cards] Change Digimon Card Count',
  props<{ id: string; count: number }>()
);
//endregion

//region Deck Actions
export const importDeck = createAction('[Digimon Deck] Import Digimon Deck', props<{ deck: IDeck }>());

export const deleteDeck = createAction('[Digimon Deck] Delete Digimon Deck', props<{ deck: IDeck }>());

export const saveDeck = createAction('[Digimon Deck] Save Digimon Deck', props<{ deck: IDeck }>());
//endregion
