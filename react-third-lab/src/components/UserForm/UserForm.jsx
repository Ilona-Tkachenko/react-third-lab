import { useState } from "react";
import "./UserForm.css";
;

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    groupCode: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setFormData({
      name: "",
      surname: "",
      groupCode: "",
      email: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Форма користувача</h2>
      <form>
        <label>
          Ім'я:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Прізвище:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        </label>
        <label>
          Код групи:
          <input type="text" name="groupCode" value={formData.groupCode} onChange={handleChange} />
        </label>
        <label>
          Електронна пошта:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </label>
      </form>

      <button type="button" onClick={handleClear}>Очистити форму</button>

      <h3>Введені дані:</h3>
      <ul>
        <li><strong>Ім'я:</strong> {formData.name}</li>
        <li><strong>Прізвище:</strong> {formData.surname}</li>
        <li><strong>Код групи:</strong> {formData.groupCode}</li>
        <li><strong>Email:</strong> {formData.email}</li>
      </ul>
    </div>
  );
}

export default UserForm;
