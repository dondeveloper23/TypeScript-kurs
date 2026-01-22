export namespace BudgetTracker {

    export namespace Finances {
        export function addExpense(expense: string, amount: number):void {
            const expenses = getAllExpenses();
            expenses.push({expense: expense, amount: amount});
            localStorage.setItem("expenses", JSON.stringify(expenses));
        }
        export function getAllExpenses() {
            const data = localStorage.getItem('expenses');
            return data ? JSON.parse(data) : [];
        }
    }
    export namespace UI {
        import getAllExpenses = BudgetTracker.Finances.getAllExpenses;

        export function showBudget(): void {
            const data = getAllExpenses()

            data.forEach((expense: any) => {
                const budgetDiv = document.getElementById("personal-budget") as HTMLDivElement;
                budgetDiv.innerHTML += `<p>${expense.expense}: ${expense.amount}</p>`
            })
        }
    }


}