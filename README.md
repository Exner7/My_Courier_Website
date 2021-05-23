# My Courier Website
## DS-UNIPI
### Web and Mobile Information Systems - 2021

In this project is an implementation for a responsive website for an imaginary courier company.

The technologies used are the core web languages: HTML5, CSS3 and JavaScript.

The project's requirements are the implementation of five interfaces (pages).

---

For this project's responsiveness the viewport display width dimensions are classified like so:

-   **Desktop view** : width *greater than* **992px**.
-   **Tablet view**  : width *between* **992px** and **768px** (inclusive).
-   **Mobile view**  : width *less than* **768px**.

---

Every page of the web-app will have a navigation menu.
This menu will allow a user to navigate to any other page of the web-site he/she wants.

---

#### Interface 1:

***Initial (Home) Page***. Which will contain the sections below:

-   Who we are? ( text and image )

    -   2-grid column display in desktop view and
    -   1-grid column display in tablet and mobile view.

-   Our services ( services categories with the use of images )

    -   4-grid column in desktop view and
    -   2-grid column in tablet and mobile view

-   Price table ( `HTML5 table` )

---

#### Interface 2:

***Our Company*** 

-   About us ( Use of HTML5 responsive `video` )

    - 2-grid column display in a desktop view and
    - 1-grid column display in tablet and mobile view

---

#### Interface 3:

***Delivery Costs Calculation Page*** (HTML5 delivery costs calculation `form`)

The cost of deliver for a parcel with:

-   a `weight` (in kg) and
-   a `postcode` ( 5-digit format )

will be calculated according to the formula: *`Delivery cost` = `Weight cost` + `Commission`*

| PC          | Weight_cost( <= 5kg ) | Weight_cost( > 5kg )                         | Commission |
|-------------|-----------------------|----------------------------------------------|------------|
| 10000-20000 | 0.5€ / kg             | 0.5€ / kg + 0.3€ for each kilogram over 5 kg | 0.5€       |
| 20001-30000 | 0.5€ / kg             | 0.5€ / kg + 0.2€ for each kilogram over 5 kg | 1€         |
| 30001-40000 | 1€ / kg               | 1€ / kg + 0.25€ for each kilogram over 5 kg  | 1.5€       |
| 40001-50000 | 1.5€ / kg             | 1.5€ / kg + 0.2€ for each kilogram over 5 kg | 2€         |
| 50000-99999 | 2€ / kg               | 2€ / kg + 0.15€ for each kilogram over 5 k1g | 2.5€       |

The form must also implement validation rules for the inputs,
ensuring the weight and postcode are in proper format.

---

#### Interface 4:

***Blog Page*** (Presentation of four articles with images)

-   4-grid column display in desktop view and
-   2-grid column display in mobile view.

---

#### Interface 5:

***Contact Page***

-   Contact `form` (Inputs: Name, Email, Topic and Message)
-   Contact Information ( Address, Phone-Number [ linkable ], Email [ linkable ] )
-   Goole Map with the use of `iframe` element

If the user attempts to click `submit` while any of the inputs are not filled,
a corresponding `alert` message must be displayed to the user to inform him/her.

---