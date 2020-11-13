import express from 'express';
const router = express.Router();

// API の GET の例のための関数
router.get('/:terminal_id/status', (req, res) => {
  console.log(`Terminal ID = ${req.params.terminal_id}`);
  res.json({
    result: 'ok',
  });
});

export default router;
