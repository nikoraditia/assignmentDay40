const mockResponse = {
    data: {
        data: [
            {
                "id": 1,
                "name": "Kue Kering",
                "price": 10000,
                "stock": 100,
                "imageUrl": ""
            }
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}