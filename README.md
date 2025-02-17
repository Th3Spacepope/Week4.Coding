# **Coding 4 | MUST 4707**

[How to Access Assignment Materials](#accessing-the-assignment-materials)

## **Objectives**

- **Understanding variable declaration and reassignment**

  - Using `let` and `const`, understanding mutability and scope.

- **Array creation and modification**

  - Declaring arrays, adding/removing elements, and modifying specific indexes.

- **Using `while` loops for iteration**

  - Iterating through arrays without using `for` loops, reinforcing manual loop control.

- **Data type checking with `typeof`**

  - Checking and understanding JavaScript data types dynamically.

- **Conditional logic for modifying array elements**
  - Using `if` statements inside loops to modify array values based on conditions.

---

## **Instructions**

### **Step 1: Set Up Your Project**

1. Open your **code editor**.
2. **Edit the HTML file** (`index.html`):
   - Inside the `<head>` tag, add a `<script>` tag that links to an external JavaScript file (`script.js`) and make sure that it is `type="module"`.
3. **Open the JavaScript file** (`script.js`).

---

### **Step 2: Declare Variables (`let` and `const`)**

1. Inside `script.js`, declare two variables:
   - A `let` variable named `myLetVariable` with the value `"Hello"`.
   - A `const` variable named `myConstVariable` with the value `42`.
2. **Try reassigning** `myConstVariable` to a different value (this will cause an error).
   - Observe the error in the **browser console**.
   - Comment out that line afterward to remove the error.

---

### **Step 3: Create and Modify an Array**

1. Create an array named `myArray` with the following three elements:

   - A number (`10`)
   - A string (`"banana"`)
   - A boolean (`true`)

2. **Modify `myArray`**:
   - Add two new elements using `.push()`:
     - An array `[1, 2, 3]`
     - A string `"added string"`
   - Remove the **first element** using `.shift()`.
   - Change the **second element** (`index 1`) to the number `345`.
   - Replace the **last element** in the array with `false`.

---

### **Step 4: Print the Array Elements Individually**

1. Use a `while` loop to iterate through `myArray` and log each element to the console:
   - Declare a new `let` variable named `i` and assign it the value `0` (this will be your iterator).
   - Create a `while` loop that runs as long as `i` is less than the length of `myArray`.
   - On each iteration, access and log the element in `myArray` at index `i`.
2. **Run the script** and check the console for the output.

---

### **Step 5: Check Data Types in the Array**

1. Use another `while` loop to print the **data type** of each element in `myArray`.

---

### **Step 6: Create Another Array**

1. Create a new array named `myScale` with the following seven elements:
   ```
   ["C", "D", "E", "F", "G", "A", "B"]
   ```

---

### **Step 7: Check Data Types in the `myScale` Array**

1. Use a `while` loop to print the **data type** of each element in `myScale`.

---

### **Step 8: Print the Whole Array**

1. Print the entire `myScale` array to the console.

---

### **Step 9: Modify `myScale` Values Based on Their Value**

1. Use a `while` loop to modify values based on their value:
   - If the element is `"F"`, replace it with `"F#"`.
   - If the element is `"B"`, replace it with `"Bb"`.

---

### **Step 10: Final Output**

1. Print the **modified version** of `myScale` to the console.

---

### **Expected Console Output Example**

```
banana
true
[1, 2, 3]
added string
string
boolean
object //NOTE: that typeof will return 'object' when given an array...
string
string
string
string
string
string
string
string
["C", "D", "E", "F", "G", "A", "B"]
["C", "D", "E", "F#", "G", "A", "Bb"]
```

---

### **Submission Steps**

1. Upload your `script.js` to the Canvas assignment.

---

## **Accessing the Assignment Materials**

1. Navigate to the assignment repository in the course [GitHub organization](https://github.com/orgs/MUST4707/repositories?q=sort%3Aname-asc).
2. Click on the green **"Use this template"** button in the top right corner.
3. Choose **"Create a new repository"**.
4. Set up the repo name under your account.
5. Click **"Create repository"**.

_You should now be at your own personal repository with the assignment materials._

6. Click on the green **"<> Code"** button and select **"Open with GitHub Desktop"**.

_You should now be in your GitHub Desktop application with a pop-up window called 'Clone a Repository'._

7. Ensure the **local path** is where you would like to save this repo.
8. Click **"Clone"**.
9. Open the folder in **Visual Studio Code** or your preferred code editor.

10. After completing your work:
    - Return to GitHub Desktop.
    - **Commit your changes** to the `master` branch (don't forget to add a commit message).
    - Click **"Push Origin"** to sync your commit with the GitHub cloud.

---
