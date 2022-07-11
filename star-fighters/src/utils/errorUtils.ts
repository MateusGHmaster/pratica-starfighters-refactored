export interface AppError {
    type: 'not_found'
}

export function notFound () : AppError {
    return {
        type: 'not_found'
    };
}