import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type InitialStateType = {
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null
    isInitialized: boolean
};

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false
};

//Redux Toolkit
export const slice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setAppErrorAC(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error;
        },
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status;
        },
        setAppIsInitializedAC(state, action: PayloadAction<{ isInitialized: boolean }>) {
            state.isInitialized = action.payload.isInitialized;
        }
    }
});

//Redux Toolkit
export const appReducer = slice.reducer;
export const {setAppErrorAC, setAppStatusAC, setAppIsInitializedAC} = slice.actions;

// export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case 'APP/SET-STATUS':
//             return {...state, status: action.status}
//         case 'APP/SET-ERROR':
//             return {...state, error: action.error}
//         case "APP/SET-IS-INITIALIZED":
//             return {...state, isInitialized: action.isInitialized}
//         default:
//             return {...state}
//     }
// }

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';




// export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
// export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
// export const setAppIsInitializedAC = (isInitialized: boolean) => ({
//     type: 'APP/SET-IS-INITIALIZED',
//     isInitialized
// } as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type IsInitializedActionType = ReturnType<typeof setAppIsInitializedAC>

// type ActionsType =
//     | SetAppErrorActionType
//     | SetAppStatusActionType
//     | IsInitializedActionType
