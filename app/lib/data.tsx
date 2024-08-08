interface MapsDetails {
    url: string,
    name: string,
    license: string,
    maxRequests: string,
}

export const maps: MapsDetails[] = [
    {
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        name: 'OpenStreetMap Standard',
        license: 'ODbL (Open Database License)',
        maxRequests: 'Illimité',
    },
    {
        url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        name: 'OpenStreetMap Humanitarian',
        license: 'ODbL (Open Database License)',
        maxRequests: 'Illimité',
    },
    {
        url: 'https://api.mapbox.com/styles/v1/nicolastroadec/clu10mdy400nu01qwgizt8el8/tiles/512/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmljb2xhc3Ryb2FkZWMiLCJhIjoiY2x1MTBrOTR5MGV5eDJsbjBrdGRrcWNyNyJ9.7m60Z52KxMHCajM-fbksNw',
        name: 'Mapbox Custom Style',
        license: 'Propriétaire',
        maxRequests: '50,000 requêtes gratuites par mois, puis 0,5 USD pour 1 000 requêtes supplémentaires',
    },
    {
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
        name: 'Carto Voyager',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial, limites non spécifiées',
    },
    {
        url: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
        name: 'Carto Light All',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial, limites non spécifiées',
    },
    {
        url: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
        name: 'Carto Light No Labels',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial, limites non spécifiées',
    },
    {
        url: 'https://cartocdn_{s}.global.ssl.fastly.net/base-antique/{z}/{x}/{y}.png',
        name: 'Carto Antique',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial, limites non spécifiées',
    },
    {
        url: 'https://cartocdn_{s}.global.ssl.fastly.net/base-flatblue/{z}/{x}/{y}.png',
        name: 'Carto Flat Blue',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial, limites non spécifiées',
    },
    {
        url: 'https://cartocdn_{s}.global.ssl.fastly.net/base-midnight/{z}/{x}/{y}.png',
        name: 'Carto Midnight',
        license: 'CARTO License',
        maxRequests: 'Gratuit pour usage non commercial, limites non spécifiées',
    },
    {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
        name: 'ArcGIS World Terrain Base',
        license: 'Esri World Imagery',
        maxRequests: 'Gratuit jusqu’à 150 000 requêtes par mois, puis 95 USD pour 1 000 requêtes supplémentaires',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
        name: 'Thunderforest Outdoors',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois, puis 0,002 USD par requête supplémentaire',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
        name: 'Thunderforest Cycle',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois, puis 0,002 USD par requête supplémentaire',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
        name: 'Thunderforest Transport Dark',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois, puis 0,002 USD par requête supplémentaire',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
        name: 'Thunderforest Pioneer',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois, puis 0,002 USD par requête supplémentaire',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
        name: 'Thunderforest Mobile Atlas',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois, puis 0,002 USD par requête supplémentaire',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
        name: 'Thunderforest Neighbourhood',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois, puis 0,002 USD par requête supplémentaire',
    },
    {
        url: 'https://{s}.tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=f9ca54ba5a4b46608b76a81c5e910be3',
        name: 'Thunderforest Atlas',
        license: 'Propriétaire',
        maxRequests: '150 000 requêtes gratuites par mois, puis 0,002 USD par requête supplémentaire',
    },
];