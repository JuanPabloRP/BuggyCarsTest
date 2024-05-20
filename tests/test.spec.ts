import { test, expect, type Page } from '@playwright/test';


//test historia de usuario #1 apartado de registro
test('ValidarRegistroUsuario', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('tester123456');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('tester123456');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('tester123456');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Arepa123456*');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Arepa123456*');
  await page.getByRole('button', { name: 'Register' }).click();
});

//test historia de usuario #2 apartado de registro
test('ValidarRegistroContraseña', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('tester12345678');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('tester12345678');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('tester12345678');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill('Arepa1#');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Arepa1#');
  await page.getByRole('button', { name: 'Register' }).click();
});


//test historia de usuario #3 apartado de registro
test('ValidarRegistroUnico', async ({ page }) => {
  await page.goto('https://buggy.justtestit.org/register');
  await page.getByLabel('Login').click();
  await page.getByLabel('Login').fill('holaaa');
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('holaaa');
  await page.getByLabel('Last Name').click();
  await page.getByLabel('Last Name').fill('holaaa');
  await page.getByText('Password Password is required').click();
  await page.getByLabel('Password', { exact: true }).fill('Holaaa1234*');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Holaaa1234*');
  await page.getByRole('button', { name: 'Register' }).click();
}); 

// Test para actualizar el perfil de un usuario, los campos de nombre, apellido, hobby, telefono y direccion
test('actualizar perfil test', async ({ page }) => {
	await page.goto('https://buggy.justtestit.org/register');
	await page.getByPlaceholder('Login').click();
	await page.getByPlaceholder('Login').fill('testuser778');
	await page.getByRole('navigation').locator('input[name="password"]').click();
	await page
		.getByRole('navigation')
		.locator('input[name="password"]')
		.fill('Test.1234');
	await page.getByRole('button', { name: 'Login' }).click();
	await page.getByRole('link', { name: 'Profile' }).click();
	await page.getByLabel('First Name').dblclick();
	await page.getByLabel('First Name').fill('nuevo user');
	await page.getByLabel('Last Name').click();
	await page.getByLabel('Last Name').fill('new usuario');
	await page.getByLabel('Hobby').selectOption('Video Games');
	await page.locator('fieldset').filter({ hasText: 'Phone' }).click();
	await page.getByLabel('Phone').fill('3128400000');
	await page.getByLabel('Address').click();
	await page.getByLabel('Address').fill('Direccion tal con tin');
	await page.getByRole('button', { name: 'Save' }).click();
	await page.getByLabel('First Name').click();
	await page.getByLabel('First Name').fill('');
	await page.getByLabel('Last Name').click();
	await page.getByLabel('Last Name').fill('');
	await page.getByLabel('First Name').click();
	await page.getByLabel('First Name').fill(' ');
	await page.getByText('Last Name is required').click();
	await page.getByLabel('Last Name').click();
	await page.getByLabel('Last Name').fill(' ');
	await page.getByLabel('Address').click();
	await page.getByLabel('Address').fill(' ');
	await page.getByRole('button', { name: 'Save' }).click();
	await page.getByLabel('Phone').click();
	await page.getByLabel('Phone').fill('');
	await page.getByRole('button', { name: 'Save' }).click();
	await page.getByRole('link', { name: 'Logout' }).click();
});

// Test para actualizar la contraseña de un usuario, se actualiza la contraseña actual, la nueva contraseña y la confirmacion de la nueva contraseña
test('Actualizar contraseña', async ({ page }) => {
	await page.goto('https://buggy.justtestit.org/');
	await page.getByPlaceholder('Login').fill('testuser');
	await page.getByPlaceholder('Login').click();
	await page.getByPlaceholder('Login').fill('testuser778');
	await page.getByPlaceholder('Login').press('Tab');
	await page.locator('input[name="password"]').fill('Test.1234');
	await page.getByRole('button', { name: 'Login' }).click();
	await page.getByRole('link', { name: 'Profile' }).click();
	await page.getByLabel('Current Password').click();
	await page.getByLabel('Current Password').fill('Test.1234');
	await page.getByLabel('New Pasword').click();
	await page.getByLabel('New Pasword').fill('1234.Test');
	await page.getByLabel('Confirm Password').click();
	await page.getByLabel('Confirm Password').fill('');
	await page.getByLabel('New Pasword').click();
	await page.getByLabel('New Pasword').fill('');
	await page.getByLabel('New Pasword').click();
	await page.getByLabel('New Pasword').fill('1234567');
	await page.getByLabel('Confirm Password').click();
	await page.getByLabel('Confirm Password').fill('1234567');
	await page.getByRole('button', { name: 'Save' }).click();
	await page.getByLabel('New Pasword').click();
	await page.getByLabel('New Pasword').fill('12345678');
	await page.getByLabel('Confirm Password').click();
	await page.getByLabel('Confirm Password').fill('12345678');
	await page.getByRole('button', { name: 'Save' }).click();
	await page.getByLabel('New Pasword').click();
	await page.getByLabel('New Pasword').fill('12345678Test');
	await page.getByLabel('Confirm Password').click();
	await page.getByLabel('Confirm Password').press('ArrowRight');
	await page.getByLabel('Confirm Password').fill('12345678Test');
	await page.getByRole('button', { name: 'Save' }).click();
	await page.getByLabel('New Pasword').click();
	await page.getByLabel('New Pasword').press('ArrowRight');
	await page.getByLabel('New Pasword').fill('12345678Test.');
	await page.getByLabel('Confirm Password').click();
	await page.getByLabel('Confirm Password').fill('12345678Test.');
	await page.getByRole('button', { name: 'Save' }).click();
	await page.getByLabel('Current Password').click();
	await page.getByLabel('Current Password').fill('12345678Test.');
	await page.getByLabel('New Pasword').click();
	await page.getByLabel('New Pasword').fill('Test.1234');
	await page.getByLabel('Confirm Password').click();
	await page.getByLabel('Confirm Password').fill('Test.1234');
	await page.getByRole('button', { name: 'Save' }).click();
	await page.getByRole('link', { name: 'Logout' }).click();
}); 

// Test para actualizar el nombre y apellido de un usuario, se verifica que no esten vacios el nombre y el apellido
test('Actualizar nombre y apellido', async ({ page }) => {
	await page.goto('https://buggy.justtestit.org/');
	await page.getByPlaceholder('Login').click();
	await page.getByPlaceholder('Login').fill('testuser778');
	await page.locator('input[name="password"]').click();
	await page.locator('input[name="password"]').fill('');
	await page.locator('input[name="password"]').click();
	await page.locator('input[name="password"]').fill('Test.1234');
	await page.getByRole('button', { name: 'Login' }).click();
	await page.getByRole('link', { name: 'Profile' }).click();
	await page.getByLabel('First Name').click();
	await page.getByLabel('First Name').fill('');
	await page.getByLabel('Last Name').click();
	await page.getByLabel('Last Name').fill('');
	await page.getByLabel('First Name').click();
	await page.getByLabel('First Name').fill(' ');
	await page.getByText('Last Name is required').click();
	await page.getByLabel('Last Name').click();
	await page.getByLabel('Last Name').fill(' ');
	await page.getByRole('button', { name: 'Save' }).click();
	await page.getByRole('link', { name: 'Logout' }).click();
});