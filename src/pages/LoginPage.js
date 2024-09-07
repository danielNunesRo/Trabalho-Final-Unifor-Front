import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://trabalho-final-unifor-1.onrender.com/auth/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Login successful:', response.data);
    } catch (err) {
      console.error('Login error:', err);
      setError('Ocorreu um erro durante o login. Verifique suas credenciais e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} className="login-paper">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} className="login-form">
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Login"
            name="login"
            value={formData.login}
            onChange={handleChange}
            placeholder="Digite seu login"
            className="login-input"
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            label="Senha"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
            className="login-input"
          />
          {error && <Typography color="error" align="center" className="error-message">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            className="submit-button"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
