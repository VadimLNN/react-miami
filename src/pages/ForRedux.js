import { useDispatch, useSelector } from "react-redux";
import {
    addCustomerAction,
    remuveCustomerAction,
} from "../store/customerReduser";
import { addCashAction, getCashAction } from "../store/cashReduser";

const ForRedux = () => {
    const dispatch = useDispatch();
    const cash = useSelector((state) => state.cash.cash);
    const customers = useSelector((state) => state.customers.customers);

    // работа со счётом
    const addCash = (cash) => {
        dispatch(addCashAction(cash));
    };
    const getCash = (cash) => {
        dispatch(getCashAction(cash));
    };

    // работа с клиентами
    const addCastomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        };
        dispatch(addCustomerAction(customer));
    };
    const remuveCustomer = (customer) => {
        dispatch(remuveCustomerAction(customer.id));
    };

    return (
        <main>
            <div style={{ margin: "50px" }}>
                <div
                    style={{
                        margin: "5px",
                        fontSize: "3rem",
                    }}
                >
                    {cash}
                </div>
                <div>
                    <button
                        style={{ margin: "5px" }}
                        className="btn"
                        onClick={() => {
                            addCash(Number(prompt()));
                        }}
                    >
                        <div style={{ color: "#ffffff" }}>Пополнить счёт</div>
                    </button>
                    <button
                        style={{ margin: "5px" }}
                        className="btn"
                        onClick={() => {
                            getCash(prompt());
                        }}
                    >
                        <div style={{ color: "#ffffff" }}>Снять со счёта</div>
                    </button>
                </div>
            </div>

            <div style={{ margin: "50px" }}>
                <button
                    style={{ margin: "5px" }}
                    className="btn"
                    onClick={() => {
                        addCastomer(prompt());
                    }}
                >
                    <div style={{ color: "#ffffff" }}>Добавить клиента</div>
                </button>

                <div style={{ margin: "5px" }}>
                    {customers.length > 0 ? (
                        <div>
                            {customers.map((customer) => (
                                <div
                                    style={{
                                        border: "2px solid black",
                                        padding: "4px",
                                        marginTop: "10px",
                                        borderRadius: 5,
                                    }}
                                    onClick={() => remuveCustomer(customer)}
                                >
                                    {customer.name}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div
                            style={{
                                border: "2px solid black",
                                padding: "4px",
                                marginTop: "10px",
                                borderRadius: 5,
                            }}
                        >
                            Клиентов нет
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default ForRedux;
