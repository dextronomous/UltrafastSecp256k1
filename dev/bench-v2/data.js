window.BENCHMARK_DATA = {
  "lastUpdate": 1773718988949,
  "repoUrl": "https://github.com/dextronomous/UltrafastSecp256k1",
  "entries": {
    "UltrafastSecp256k1 Performance": [
      {
        "commit": {
          "author": {
            "email": "payysoon@gmail.com",
            "name": "Vano Chkheidze",
            "username": "shrec"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f6dde593c563653798f01ca9d21c4a757975e69",
          "message": "fix: clear remaining low-level code scanning alerts (#162)\n\nCo-authored-by: shrec <shrec@users.noreply.github.com>",
          "timestamp": "2026-03-17T06:54:30+04:00",
          "tree_id": "410af40c0f0d138e9101aeb86918be76b80f1951",
          "url": "https://github.com/dextronomous/UltrafastSecp256k1/commit/5f6dde593c563653798f01ca9d21c4a757975e69"
        },
        "date": 1773718988127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "field_inv",
            "value": 1051.6,
            "unit": "ns"
          },
          {
            "name": "scalar_inv",
            "value": 1336.4,
            "unit": "ns"
          },
          {
            "name": "pubkey_create (k*G)",
            "value": 7805.6,
            "unit": "ns"
          },
          {
            "name": "scalar_mul (k*P)",
            "value": 32891.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_with_plan",
            "value": 32385.8,
            "unit": "ns"
          },
          {
            "name": "dual_mul (a*G + b*P)",
            "value": 35812.8,
            "unit": "ns"
          },
          {
            "name": "point_add (affine+affine)",
            "value": 1304.1,
            "unit": "ns"
          },
          {
            "name": "point_add (J+A mixed)",
            "value": 240,
            "unit": "ns"
          },
          {
            "name": "point_dbl",
            "value": 145.6,
            "unit": "ns"
          },
          {
            "name": "batch_normalize /pt (N=64)",
            "value": 187.7,
            "unit": "ns"
          },
          {
            "name": "next_inplace (+=G)",
            "value": 255,
            "unit": "ns"
          },
          {
            "name": "KPlan::from_scalar(w=4)",
            "value": 2731.2,
            "unit": "ns"
          },
          {
            "name": "batch_to_compressed /pt (N=64)",
            "value": 197.9,
            "unit": "ns"
          },
          {
            "name": "batch_x_only_bytes /pt (N=64)",
            "value": 149,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign",
            "value": 10503.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_verified",
            "value": 66661.6,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify",
            "value": 37932,
            "unit": "ns"
          },
          {
            "name": "schnorr_keypair_create",
            "value": 7822.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign",
            "value": 8330.8,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign_verified",
            "value": 48482.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (cached xonly)",
            "value": 38449.3,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (raw bytes)",
            "value": 39768.2,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=4)",
            "value": 148924.4,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=4)",
            "value": 37231.1,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=16)",
            "value": 604519.5,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=16)",
            "value": 37782.5,
            "unit": "ns"
          },
          {
            "name": "schnorr_batch_verify(N=64)",
            "value": 3975714.1,
            "unit": "ns"
          },
          {
            "name": "-> per-sig amortized (N=64)",
            "value": 62120.5,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=4)",
            "value": 144868.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=16)",
            "value": 581015.2,
            "unit": "ns"
          },
          {
            "name": "ecdsa_batch_verify(N=64)",
            "value": 2331132.4,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_inverse (SafeGCD)",
            "value": 1876,
            "unit": "ns"
          },
          {
            "name": "ct::generator_mul (k*G)",
            "value": 17496.1,
            "unit": "ns"
          },
          {
            "name": "ct::scalar_mul (k*P)",
            "value": 39129.5,
            "unit": "ns"
          },
          {
            "name": "ct::point_dbl",
            "value": 148,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_complete (11M+6S)",
            "value": 403.9,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_complete (7M+5S)",
            "value": 277.6,
            "unit": "ns"
          },
          {
            "name": "ct::point_add_mixed_unified (7M+5S)",
            "value": 273.4,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign",
            "value": 21921.1,
            "unit": "ns"
          },
          {
            "name": "ct::ecdsa_sign_verified",
            "value": 78060.8,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign",
            "value": 19358.1,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_sign_verified",
            "value": 59534,
            "unit": "ns"
          },
          {
            "name": "ct::schnorr_keypair_create",
            "value": 18911.3,
            "unit": "ns"
          },
          {
            "name": "keccak256 (32B)",
            "value": 437.5,
            "unit": "ns"
          },
          {
            "name": "ethereum_address",
            "value": 440.5,
            "unit": "ns"
          },
          {
            "name": "eip191_hash",
            "value": 438.7,
            "unit": "ns"
          },
          {
            "name": "eth_sign_hash",
            "value": 10531.7,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign_recoverable",
            "value": 10486.1,
            "unit": "ns"
          },
          {
            "name": "ecrecover",
            "value": 47565.9,
            "unit": "ns"
          },
          {
            "name": "eth_personal_sign",
            "value": 11003.4,
            "unit": "ns"
          },
          {
            "name": "ethereum_address_eip55",
            "value": 996.4,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute (SHA256 shared secret)",
            "value": 40600.1,
            "unit": "ns"
          },
          {
            "name": "ecdh_compute_raw (x-only shared)",
            "value": 40493.6,
            "unit": "ns"
          },
          {
            "name": "taproot_output_key (BIP-341 key path)",
            "value": 16413.9,
            "unit": "ns"
          },
          {
            "name": "taproot_tweak_privkey (BIP-341)",
            "value": 19996,
            "unit": "ns"
          },
          {
            "name": "bip32_master_key (64B seed)",
            "value": 1310.7,
            "unit": "ns"
          },
          {
            "name": "bip32_coin_derive_key (BTC m/84'/0'/0'/0/0)",
            "value": 139917.2,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (BTC end-to-end)",
            "value": 160919.6,
            "unit": "ns"
          },
          {
            "name": "coin_address_from_seed (ETH end-to-end)",
            "value": 160998.8,
            "unit": "ns"
          },
          {
            "name": "silent_payment_create_output",
            "value": 48436.6,
            "unit": "ns"
          },
          {
            "name": "silent_payment_scan (single output set)",
            "value": 67315.6,
            "unit": "ns"
          },
          {
            "name": "field_inv_var",
            "value": 1129.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse (CT)",
            "value": 1852.4,
            "unit": "ns"
          },
          {
            "name": "scalar_inverse_var",
            "value": 1162.3,
            "unit": "ns"
          },
          {
            "name": "point_dbl (gej_double_var)",
            "value": 149.3,
            "unit": "ns"
          },
          {
            "name": "point_add (gej_add_ge_var)",
            "value": 246.6,
            "unit": "ns"
          },
          {
            "name": "ecmult (a*P + b*G, Strauss)",
            "value": 37130.8,
            "unit": "ns"
          },
          {
            "name": "ecmult_gen (k*G, comb)",
            "value": 18420,
            "unit": "ns"
          },
          {
            "name": "generator_mul (ec_pubkey_create)",
            "value": 20378.5,
            "unit": "ns"
          },
          {
            "name": "scalar_mul_P (k*P, tweak_mul)",
            "value": 34749.6,
            "unit": "ns"
          },
          {
            "name": "point_add (pubkey_combine)",
            "value": 2554.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_sign (BIP-340)",
            "value": 21874.6,
            "unit": "ns"
          },
          {
            "name": "schnorr_verify (BIP-340)",
            "value": 39552.7,
            "unit": "ns"
          },
          {
            "name": "generator_mul (EC_POINT_mul k*G)",
            "value": 394936.9,
            "unit": "ns"
          },
          {
            "name": "ecdsa_sign (ECDSA_do_sign)",
            "value": 415362.3,
            "unit": "ns"
          },
          {
            "name": "ecdsa_verify (ECDSA_do_verify)",
            "value": 375395.4,
            "unit": "ns"
          },
          {
            "name": "Pedersen commit",
            "value": 57018.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge prove (sigma)",
            "value": 41764.3,
            "unit": "ns"
          },
          {
            "name": "Knowledge verify",
            "value": 40706.4,
            "unit": "ns"
          },
          {
            "name": "DLEQ prove",
            "value": 81049.7,
            "unit": "ns"
          },
          {
            "name": "DLEQ verify",
            "value": 107516.9,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_prove (64b)",
            "value": 24392120,
            "unit": "ns"
          },
          {
            "name": "Bulletproof range_verify (64b)",
            "value": 4922632.7,
            "unit": "ns"
          },
          {
            "name": "Harness",
            "value": 3000000000,
            "unit": "ns"
          }
        ]
      }
    ]
  }
}