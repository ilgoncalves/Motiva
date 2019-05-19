const USER_SET_USERS_SORTED = 'USER_SET_USERS_SORTED'
const USER_SET_LOADING = 'USER_SET_LOADING'
const AWARDS_SET_LOADING = 'AWARDS_SET_LOADING'
const AWARDS_SET = 'AWARDS_SET'
const SEASON_SET_LOADING = 'SEASON_SET_LOADING'
const SEASON_SET = 'SEASON_SET'
const GOALS_SET = 'GOALS_SET'
const GOALS_SET_LOADING = 'GOALS_SET_LOADING'
const initialState = {
    usersSortedByScore: [],
    loading:false,
    awardsLoading:false,
    awards:[],
    seasonLoading:false,
    seasons:[],
    goalsLoading:false,
    goals:[]
}

export default function user(state = initialState, action = {}) {
    switch (action.type) {
        case USER_SET_USERS_SORTED:
            return { ...state, usersSortedByScore: action.payload }
        case USER_SET_LOADING:
            return { ...state, loading: action.payload }
        case SEASON_SET_LOADING:
            return { ...state, seasonLoading: action.payload }
        case AWARDS_SET_LOADING:
            return { ...state, awardsLoading: action.payload }
        case AWARDS_SET:
            return { ...state, awards: action.payload }
        case GOALS_SET_LOADING:
            return { ...state, goalsLoading: action.payload }
        case GOALS_SET:
            return { ...state, goals: action.payload }
        case SEASON_SET:
            return { ...state, seasons: action.payload }
        default:
            return state
    }
}
