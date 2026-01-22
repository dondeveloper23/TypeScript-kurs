const orders: OrderInterface[] = []

type CurrencyType = "EUR" | "RSD"
type NameFormat = `${string} ${string}`

interface OrderInterface {
    firstName: string,
    lastName: string,
    city: string,
    country: string,
    zip: number,
    productName: string,
    amount: number,
    currency: CurrencyType,
}


function addOrder(
    name: NameFormat,
    locationStr: string,
    zip: number,
    productName: string,
    amount: number,
    currency: CurrencyType
): OrderInterface|never {
    const splitName = name.split(" "); // "Tomislav Nikolic" => ["Tomislav", "Nikolic"]
    const splitLocation = locationStr.split(" "); // "Belgrade Serbia" => ["Belgrade", "Serbia"]

    if (splitName.length > 2||  splitLocation.length > 2) {
        throw new Error("Name is too long!")
    }

    return {
        firstName: splitName[0],
        lastName: splitName[1],
        city: splitLocation[0],
        country: splitLocation[1],
        zip: zip,
        productName: productName,
        amount: amount,
        currency: currency,
    };
}

function listOrders(orders: OrderInterface[]): void {
    const orderDiv: HTMLElement = document.getElementById("order-list");
    orderDiv.innerHTML = "";
    orders.forEach(order =>  {

        const singleOrder: HTMLDivElement = document.createElement("div");
        const orderName: HTMLHeadingElement = document.createElement("h1");
        orderName.textContent = `${order.firstName} ${order.lastName}`;

        const orderLocation: HTMLParagraphElement = document.createElement("p");
        orderLocation.textContent = `${order.city}, ${order.country}`;

        const orderProductName: HTMLHeadingElement = document.createElement("p");
        orderProductName.textContent = `${order.productName}`;

        const orderPrice: HTMLSpanElement = document.createElement("span");
        orderPrice.textContent = `${order.amount}`

        singleOrder.append(orderName, orderLocation, orderProductName, orderPrice);
        orderDiv.append(singleOrder);
    });
}

function search(searchTerm: string, orderList: OrderInterface[]): void {
    const searchLower = searchTerm.toLowerCase();

    const filteredorders = orderList.filter(order => {
        if(order.productName.toLowerCase() === searchLower) {
            return order
        }
    })

    listOrders(filteredorders)
}

const singleOrder = addOrder(
    "Tomislav Nikolic",
    "Belgrade Serbia",
    11000,
    "Monitor",
    5,
    "EUR"
);
const singleOrder2 = addOrder(
    "Dusan Sasic",
    "Belgrade Serbia",
    11000,
    "Monitor",
    5,
    "EUR"
);


orders.push(singleOrder, singleOrder2);
listOrders(orders);

