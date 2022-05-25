export const formatear = cantidad =>{ 
    return cantidad.toLocaleString('es-ES', 
    {style: 'currency', currency: 'EUR'}
    )
}
